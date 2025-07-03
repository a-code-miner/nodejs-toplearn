
import http from 'http'


const server = http.createServer((req, res) => {
    const { url, method, headers } = req
    console.log(`Request URL: ${url} - Method: ${method} - Headers: ${headers}`)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first webpage</title></head>')
    res.write('<body><h1>Hello world</h1></body>')
    res.write('</html>')
    res.end()
})


server.listen(3000)


