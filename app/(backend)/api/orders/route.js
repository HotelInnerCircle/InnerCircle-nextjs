import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import Order from "@/lib/models/Order";
import { requireAdminAuth } from "@/lib/adminAuth";

export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();

    if (!body.name || !body.phone || !body.room || !body.product || !body.qty) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[0-9]{10}$/.test(body.phone)) {
      return NextResponse.json(
        { message: "Phone number must be 10 digits" },
        { status: 400 }
      );
    }

    // Whitelist only expected fields — prevents mass assignment
    const { name, phone, room, product, qty } = body;
    const order = await Order.create({ name, phone, room, product, qty });

    return NextResponse.json(
      { message: "Order placed successfully!", order },
      { status: 200 }
    );
  } catch (err) {
    console.error("Order POST error:", err);
    return NextResponse.json(
      { message: "Failed to place order" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json({ orders }, { status: 200 });
  } catch (err) {
    console.error("Orders GET error:", err);
    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
