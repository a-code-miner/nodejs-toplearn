// console.log(process.title)
// console.log(process.pid)
// console.log(process.arch)
// console.log(process.platform)
// console.log(process.version)


// console.log(process.cpuUsage())
// console.log(process.memoryUsage())
// console.log(process.uptime())
// console.log(process.cwd())
// console.log(process.env)
// console.log(process.execPath)
// console.log(process.argv)
// console.log(process.argv0)
// console.log(process.execArgv)
// // console.log(process.kill(13340, 'SIGINT'))

// console.log(process.features)
// console.log(process.config)
// console.log(process.release)
// console.log(process.connected)
// console.log(process.constrainedMemory())
// console.log(process.hrtime())
// console.log(process.hrtime.bigint())
// console.log(process.eventNames())
// console.log(process.ppid)
// console.log(process.stdout)
// console.log(process.stderr)
// console.log(process.stdin)
// console.log(process.finalization)
// console.log(process.disconnect())
// console.log(process.availableMemory())
// // console.log(process.loadEnvFile('path?'))
// console.log(process.channel)
// console.log(process)



// process.on('beforeExit', (code) => {
//     console.log(`Process beforeExit event with code: ${code}`)
// })

// process.on('exit', (code) => {
//     console.log(`Process exit event with code: ${code}`)
// })

// console.log('This runs first!')


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})


