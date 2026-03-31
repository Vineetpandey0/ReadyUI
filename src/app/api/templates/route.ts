import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
        headers: { "Content-Type": "application/json" }
    });

}