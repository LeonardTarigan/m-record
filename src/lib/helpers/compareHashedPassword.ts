import bcrypt from "bcryptjs";

export async function compareHashedPasswords(
  plaintextPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    const isMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
}
