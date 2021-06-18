import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Simran',
        email: 'simran@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Gagan',
        email: 'gagan@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users