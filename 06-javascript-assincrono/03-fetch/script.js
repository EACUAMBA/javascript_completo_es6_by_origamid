const doc = fetch('./doc.txt')

doc.then((response)=>{
    return response.text()
}) .then((text)=>{
    console.log(text)
})

