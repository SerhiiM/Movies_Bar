
export function onEnterLoading(params, replace, done){
    console.log('onEnterLoading')
    done();
}

export function onEnterInvoicesList(params, replace, done){
    console.log('onEnterInvoicesList',arguments)
    done();
}

export function onEnterInvoice(params, replace, done){
    console.log('onEnterInvoice')
    done();
}