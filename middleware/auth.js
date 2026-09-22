import jwt from "jsonwebtoken"

const segredo = 'M3uS3gr3d0'

export default async function authMiddleware(req,res,next) {
    console.log("AAAAAAAAAAAAQUI")
    try {
        const token = req.headers['authorization']

        if(!token){
            throw new Error()
        }
        const decoded = jwt.verify(token, segredo)
        console.log(decoded)
        next()
    } catch (error) {
        res.status(403).send({
            message: "você não tem autorização"
        })
    }
}