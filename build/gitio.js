const fs=require('fs')
const html=require('child_process').execSync('ENV=PROD sptc "server/index.s?uri=/index/ssr"').toString()
const gitioHtml=html.replace(/\/assets\/app/g, 'https://kagami-arch-jp.github.io/myprofile/server/public/app')
fs.writeFileSync(__dirname+'/../index.html', gitioHtml)
