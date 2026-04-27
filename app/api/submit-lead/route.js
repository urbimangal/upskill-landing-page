import { NextResponse } from "next/server";

// POST /api/submit-lead
// Receives form data from LeadForm and logs or stores it
export async function POST(request) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    const { name, email, company, message } = body;

    // Basic validation — name and email are required
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // In a real app, you'd save this to a database (e.g. MongoDB, Supabase)
    // For now, we just log the lead to the server console
    console.log("📥 New Lead Received:", { name, email, company, message });

    // Return a success response
    return NextResponse.json(
      { message: "Lead submitted successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
