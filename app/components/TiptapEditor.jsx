'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExt from '@tiptap/extension-image';
import LinkExt from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import { Node, mergeAttributes } from '@tiptap/core';
import { useRef, useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdStrikethroughS,
  MdFormatListBulleted, MdFormatListNumbered,
  MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight, MdFormatAlignJustify,
  MdFormatQuote, MdCode, MdLink, MdLinkOff, MdImage, MdVideoLibrary,
  MdHorizontalRule, MdUndo, MdRedo, MdHighlight, MdTitle, MdOndemandVideo,
  MdClose,
} from 'react-icons/md';
import { FaYoutube, FaSpinner, FaHeading } from 'react-icons/fa';
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs';

/* ── Custom Video Node ── */
const VideoNode = Node.create({
  name: 'video',
  group: 'block',
  atom: true,
  draggable: true,
  addAttributes() {
    return {
      src: { default: null },
      controls: { default: true },
      width: { default: '100%' },
    };
  },
  parseHTML() {
    return [{ tag: 'video[src]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['video', mergeAttributes(HTMLAttributes, { class: 'tiptap-video', controls: true })];
  },
  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement('video');
      dom.src = node.attrs.src;
      dom.controls = true;
      dom.className = 'tiptap-video';
      dom.style.width = '100%';
      dom.style.borderRadius = '8px';
      dom.style.margin = '0.75rem 0';
      return { dom };
    };
  },
});

/* ── Toolbar Button ── */
function ToolBtn({ onClick, active, disabled, title, children, danger }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      disabled={disabled}
      title={title}
      className={`w-7 h-7 flex items-center justify-center rounded text-sm transition
        ${active ? 'bg-amber-500 text-white' : danger ? 'text-red-500 hover:bg-red-50' : 'text-gray-600 hover:bg-gray-100'}
        disabled:opacity-30 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="w-px h-5 bg-gray-200 mx-0.5 shrink-0" />;
}

/* ── YouTube Dialog ── */
function YoutubeDialog({ onInsert, onClose }) {
  const [url, setUrl] = useState('');
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2"><FaYoutube className="text-red-500" /> Embed YouTube</h3>
          <button onClick={onClose}><MdClose className="text-xl text-gray-400 hover:text-gray-700" /></button>
        </div>
        <input
          autoFocus
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 mb-4"
        />
        <button
          onClick={() => { if (url.trim()) { onInsert(url.trim()); onClose(); } }}
          className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition"
        >
          Embed Video
        </button>
      </div>
    </div>
  );
}

/* ── Link Dialog ── */
function LinkDialog({ currentUrl, onInsert, onClose }) {
  const [url, setUrl] = useState(currentUrl || '');
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2"><MdLink className="text-amber-500" /> Insert Link</h3>
          <button onClick={onClose}><MdClose className="text-xl text-gray-400 hover:text-gray-700" /></button>
        </div>
        <input
          autoFocus
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 mb-4"
        />
        <button
          onClick={() => { onInsert(url.trim()); onClose(); }}
          className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition"
        >
          Insert Link
        </button>
      </div>
    </div>
  );
}

/* ── Main Editor ── */
export default function TiptapEditor({ content = '', onChange, placeholder = 'Start writing your blog content here...' }) {
  const imgInputRef = useRef();
  const vidInputRef = useRef();
  const [imgUploading, setImgUploading] = useState(false);
  const [vidUploading, setVidUploading] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: { languageClassPrefix: 'language-' } }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      LinkExt.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[#a17c36] underline' } }),
      ImageExt.configure({ allowBase64: false, HTMLAttributes: { class: 'max-w-full rounded-lg' } }),
      VideoNode,
      Youtube.configure({ width: '100%', height: 480, nocookie: true }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
    ],
    content,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      handleDrop(view, event, _slice, moved) {
        if (!moved && event.dataTransfer?.files?.length) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
            event.preventDefault();
            uploadImageFile(file, view.state.selection.from);
            return true;
          }
        }
        return false;
      },
      handlePaste(view, event) {
        const items = event.clipboardData?.items;
        if (!items) return false;
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) { uploadImageFile(file); return true; }
          }
        }
        return false;
      },
    },
  });

  // sync external content changes (e.g. when editing existing blog)
  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  const uploadImageFile = useCallback(async (file, pos) => {
    if (!editor) return;
    setImgUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/blogs/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      if (pos !== undefined) {
        editor.chain().focus().insertContentAt(pos, { type: 'image', attrs: { src: data.url } }).run();
      } else {
        editor.chain().focus().setImage({ src: data.url }).run();
      }
      toast.success('Image uploaded');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setImgUploading(false);
    }
  }, [editor]);

  const handleImagePick = async (e) => {
    const file = e.target.files?.[0];
    if (file) await uploadImageFile(file);
    e.target.value = '';
  };

  const handleVideoPick = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    e.target.value = '';
    setVidUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/media/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      editor.chain().focus().insertContent({ type: 'video', attrs: { src: data.url } }).run();
      toast.success('Video uploaded');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setVidUploading(false);
    }
  };

  const setLink = (url) => {
    if (!url) {
      editor?.chain().focus().unsetLink().run();
    } else {
      editor?.chain().focus().extendMarkRange('link').setLink({ href: url, target: '_blank' }).run();
    }
  };

  if (!editor) return null;

  const charCount = editor.storage.characterCount?.characters() ?? 0;
  const wordCount = editor.storage.characterCount?.words() ?? 0;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* ── TOOLBAR ── */}
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">

        {/* History */}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo"><MdUndo className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo"><MdRedo className="text-base" /></ToolBtn>
        <Divider />

        {/* Headings */}
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1"><BsTypeH1 /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2"><BsTypeH2 /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3"><BsTypeH3 /></ToolBtn>
        <Divider />

        {/* Inline Marks */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><MdFormatBold className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><MdFormatItalic className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline"><MdFormatUnderlined className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough"><MdStrikethroughS className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHighlight().run()} active={editor.isActive('highlight')} title="Highlight"><MdHighlight className="text-base" /></ToolBtn>
        <Divider />

        {/* Color */}
        <div className="relative flex items-center" title="Text Color">
          <span className="w-7 h-7 flex items-center justify-center text-gray-600">
            <MdTitle className="text-base" />
          </span>
          <input
            type="color"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            onInput={(e) => editor.chain().focus().setColor(e.target.value).run()}
            title="Text Color"
          />
        </div>
        <Divider />

        {/* Lists */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List"><MdFormatListBulleted className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List"><MdFormatListNumbered className="text-base" /></ToolBtn>
        <Divider />

        {/* Alignment */}
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left"><MdFormatAlignLeft className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align Center"><MdFormatAlignCenter className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align Right"><MdFormatAlignRight className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign('justify').run()} active={editor.isActive({ textAlign: 'justify' })} title="Justify"><MdFormatAlignJustify className="text-base" /></ToolBtn>
        <Divider />

        {/* Blocks */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote"><MdFormatQuote className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline Code"><MdCode className="text-base" /></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code Block">
          <span className="text-[10px] font-bold font-mono">{'</>'}</span>
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule"><MdHorizontalRule className="text-base" /></ToolBtn>
        <Divider />

        {/* Link */}
        <ToolBtn onClick={() => setShowLink(true)} active={editor.isActive('link')} title="Insert Link"><MdLink className="text-base" /></ToolBtn>
        {editor.isActive('link') && (
          <ToolBtn onClick={() => editor.chain().focus().unsetLink().run()} title="Remove Link" danger><MdLinkOff className="text-base" /></ToolBtn>
        )}
        <Divider />

        {/* Media */}
        <ToolBtn
          onClick={() => imgInputRef.current?.click()}
          disabled={imgUploading}
          title="Upload Image"
        >
          {imgUploading ? <FaSpinner className="text-xs animate-spin text-amber-500" /> : <MdImage className="text-base" />}
        </ToolBtn>
        <input ref={imgInputRef} type="file" accept="image/*" className="hidden" onChange={handleImagePick} />

        <ToolBtn
          onClick={() => vidInputRef.current?.click()}
          disabled={vidUploading}
          title="Upload Video"
        >
          {vidUploading ? <FaSpinner className="text-xs animate-spin text-amber-500" /> : <MdVideoLibrary className="text-base" />}
        </ToolBtn>
        <input ref={vidInputRef} type="file" accept="video/*" className="hidden" onChange={handleVideoPick} />

        <ToolBtn onClick={() => setShowYoutube(true)} title="Embed YouTube">
          <FaYoutube className="text-red-500 text-sm" />
        </ToolBtn>
      </div>

      {/* ── EDITOR CONTENT ── */}
      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>

      {/* ── FOOTER ── */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-400">
        <span>Drag & drop or paste images directly into the editor</span>
        <span>{wordCount} words · {charCount} characters</span>
      </div>

      {/* ── DIALOGS ── */}
      {showYoutube && (
        <YoutubeDialog
          onInsert={(url) => editor.chain().focus().setYoutubeVideo({ src: url }).run()}
          onClose={() => setShowYoutube(false)}
        />
      )}
      {showLink && (
        <LinkDialog
          currentUrl={editor.getAttributes('link').href}
          onInsert={setLink}
          onClose={() => setShowLink(false)}
        />
      )}
    </div>
  );
}
