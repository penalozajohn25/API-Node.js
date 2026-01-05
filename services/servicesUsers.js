const getConnection = require('../libs/postgres');
const boom = require('@hapi/boom');

// const { Client } = require('pg');
const { models } = require('../libs/sequelize');


// const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'john',
//   password: 'admin1234',
//   database: 'my_api'
// });


const getAllUser = async (req, res) => {
  // const client = await getConnection();
  // await client.connect();
  // const response = await client.query('SELECT * FROM tasks');
  // return response.rows;
  const response = await models.User.findAll({
    include: ['client']
  });
  return response;
}

const getUser = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  } catch (error) {
    console.log(error);
  }
}

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      user: newUser,
      message: 'User Created'
    }
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async ({ id, body }) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return 'Id not Found';
    }
    const response = await user.update(body);
    return {
      user: response,
      message: 'User Update'
    }
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    await user.destroy();
    return {
      message: 'User Delete',
      id
    }
  } catch (error) {
    console.log(error);
  }
}

// const getAllUser = (req, res) => {
//     try {
//         const { limit, offset } = req.query;
//         if (limit && offset) {
//             res.json({
//                 limit,
//                 offset
//             });
//         } else {
//             res.send('no existen parametros')
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }


module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
}