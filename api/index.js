import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url'

import userRoutes from "./routes/users.js"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 8800
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use("/api", userRoutes)

app.get("/health", (req, res) => {
    res.json({message: "API Psiconect rodando! 🚀🚀", status: "online"})
})

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'index.html'))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'index.html'))
})

app.get("/cadastrosucesso.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'cadastrosucesso.html'))
})

app.get("/canais.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'canais.html'))
})

app.get("/resultadobusca.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'resultadobusca.html'))
})

app.get("/sobre.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'sobre.html'))
})

app.get("/termodeuso.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'termodeuso.html'))
})

app.get("/transtornos.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'transtornos.html'))
})

app.get("/cadastro.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page', 'cadastro.html'))
})


app.use((req, res, next) => {
  console.log(`📄 ${req.method} ${req.url}`)
  next()
})



app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
  console.log(`🌐 Acesse: http://localhost:${PORT}/`)
  console.log(`📋 Health check: http://localhost:${PORT}/health`)
  console.log(`📄 Páginas: http://localhost:${PORT}/page/index.html`)
})


