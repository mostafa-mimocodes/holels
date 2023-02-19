const datatableSearchInputs = document.querySelectorAll('[id$=table_filter]');
console.log(datatableSearchInputs)
datatableSearchInputs.forEach((input)=>{
    const currTable = input.id.substr(0,input.id.indexOf('_filter'))
    input.children[0].innerHTML= `<div class="form-group">
        <div class="input-icon">
            <input type="text" class="form-control " aria-controls="${currTable}" id="${currTable}_search_input" placeholder />
            <span><i class="flaticon2-search-1 text-primary icon-md"></i></span>
        </div>
    </div>`
    console.log(input)
})
