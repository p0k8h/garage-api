import { generateToken } from "../../helpers/jwt.helper";
import connection from "../../config/conn";

export function login(params) {
  let { email, password } = params;
  console.log('pp', params);
  return new Promise((resolve, reject) => {

    connection.query('SELECT * FROM employees WHERE email = ?', [email], (err, rows) => {

      if (err) return reject(err);

      console.log("==", rows);

      if (!rows.length) {
        return reject({
          message: "Authenticated failed. User not found!"
        });
      } else {
        const [user] = rows;
        const doesPasswordMatch = user.password === password;

        if (!doesPasswordMatch) {
          return reject({
            message: "Password doesn't match"
          });
        } else {
          let token = generateToken(user);

          return resolve({
            user,
            token
          });
        }

      }
    });
  });
}


// Roles
/**
 * 1 - Office Assistant
 * 2- Mechanics
 * 3 - Owner
 */

export function register(params) {
  let { email, password, role } = params;

  console.log(params);

  return new Promise((resolve, reject) => {

    const employee = {
      email, password, role
    };

    connection.query('INSERT INTO employees SET ?', employee, (err, res) => {

      console.log("ddd", err, res);

      if (err) return reject(err);

      resolve(res);
    });
  });
}
