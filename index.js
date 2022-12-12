function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom +'px'
    document.body.append(object)
    console.log(object)
    
}
newImage('assets/green-character.gif', 100, 100)
/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


let greenTree = document.createElement('img')
greenTree.src = 'https://freesvg.org/img/Pine_Tree.png'
greenTree.style.position = 'fixed'
greenTree.style.left = '450px'
greenTree.style.bottom = '200px'
document.body.append(greenTree)