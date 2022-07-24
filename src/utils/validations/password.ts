import bcrypt from "bcryptjs";

import config from "../../config";

interface HashPassword {
  isHash: boolean;
  password: string;
}

export function isMatchPasswords(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function hashPassword(password: string): Promise<HashPassword> {
  return new Promise((resolve, reject) => {
    const rounds = config.encrypt.rounds;

    bcrypt.genSalt(rounds, (err, salt) => {
      if (err) {
        return reject({
          isHash: false,
          password: "",
        });
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return reject({
            isHash: false,
            password: "",
          });
        }
        return resolve({
          isHash: true,
          password: hash,
        });
      });
    });
  });
}
