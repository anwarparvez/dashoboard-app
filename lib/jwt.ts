// ===============================
// 2️⃣ JWT UTILITIES (lib/jwt.ts)
// ===============================
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET!;


export function signJwt(payload: object) {
return jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
}


export function verifyJwt(token: string) {
return jwt.verify(token, JWT_SECRET);
}