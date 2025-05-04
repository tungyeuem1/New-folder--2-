const child = document.getElementById('child')
  const parent = document.getElementById('parent')
  const grandparent = document.getElementById('grandparent')

  child.addEventListener('click', function () {
  
    console.log('Child clicked!')
  })

  parent.addEventListener('click', function () {
    console.log('Parent clicked!')
  })

  grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked!')
  })