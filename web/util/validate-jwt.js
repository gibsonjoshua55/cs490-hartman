import * as jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'default_secret';

export async function validateJwt(accessToken) {
  return new Promise((resolve, reject) => {
    jwt.verify(accessToken, secret, (err, decoded) => {
      if (!err) {
        resolve(decoded);
      }
      else {
        reject(err);
      }
    })
  })
}
