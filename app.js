
import http from 'http'
import { writeFileSync } from 'fs'


const server = http.createServer((req, res) => {
    const { url, method, headers } = req
    // console.log(`Request URL: ${url} - Method: ${method} - Headers: ${headers}`)

    res.setHeader('Content-Type', 'text/html')

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>My first webpage</title></head>')
        res.write('<body>')
        res.write('<h1>Home page</h1>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message" placeholder="Enter your message" />')
        res.write('<input type="submit" value="Send Message" />')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/hello') {
        res.write('<html>')
        res.write('<head><title>My first webpage</title></head>')
        res.write('<body><h1>Hello World</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
            console.log(body)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            writeFileSync('message.txt', message)
            console.log(`Message saved: ${message}`)
        })
        // res.statusCode = 302
        // res.setHeader('Location', '/')
        res.writeHead(302, { Location: '/' })
        return res.end()
    }
    else {
        res.write('<html>')
        res.write('<head><title>My first webpage</title></head>')
        res.write('<body><h1>Not Found!</h1></body>')
        res.write('</html>')
        return res.end()
    }
})


server.listen(3000)


