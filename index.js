function newImage(greenCharacter){
    let (greenCharacter) = document.createElement('img')
    (greenCharacter).src = 'assets/green-character.gif'
    (greenCharacter).style.position = 'fixed'
    (greenCharacter).style.left = '100px'
    (greenCharacter).style.bottom = '100px'
    document.body.append(greenCharacter)
    console.log( ${greenCharacter} )
    
}
newImage(greenCharacter)
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