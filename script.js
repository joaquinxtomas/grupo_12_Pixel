const files = document.querySelectorAll('.fancy-file')
Array.from(files).forEach(
    f=>{
        f.addEventListener('change', e =>{
            const span=document.querySelector('.fancy-file_fancy-file-name > span');
            span.innerHTML = f.files[0].name
        })
    }
)