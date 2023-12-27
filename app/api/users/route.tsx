import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // fetch userse form a db
    return NextResponse.json([
        { id: 1, name: 'Mosh' },
        { id: 2, name: 'John' },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    // Validate
    // If invalid, return 400
    // Else, return
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}