import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);

export async function POST(req: NextRequest) {
    const { email, discord, serverSize: server_size } = await req.json();

    const { error } = await supabase
        .from("waitlist")
        .insert({ email, discord, server_size })

    if (error) {
        return NextResponse.json({ status: 500, msg: "Server error! x_x" });
    }

    return NextResponse.json({ status: 201, msg: "Yippee ^_^" });
}