const fs = require("fs")
const path = require("path")
const fileNames = () => {
    const files = fs.readdirSync(path.join(__dirname, "..", "modules"))
    return files.map((file) => {
        return file.split(".")[0]
    })
}

exports.include = (router) => {
    const files = fileNames()
    console.log('files: ', files)
    for (let x of files) {
		let routerPath = `../modules/${x}/${x}.router.js`
        let fsRouterPath = path.join(__dirname, '..', 'modules', x, `${x}.router.js`)

        console.log('fs.existsSync(routerPath: ', fs.existsSync(fsRouterPath))
        console.log('fs.existsSync(routerPath: ', routerPath)
		if(fs.existsSync(fsRouterPath)) {
            console.log('routerPath: ', routerPath)
            router.use(`/${x}`, require(routerPath))
        }
    }
    return router
}