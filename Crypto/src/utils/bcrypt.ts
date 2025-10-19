import * as bcrypt from 'bcrypt';

export async function encode(data: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hashSync(data, salt);
}

export async function compareData(document: string, hash: string) {
  return bcrypt.compareSync(document, hash);
}
