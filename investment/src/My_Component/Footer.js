import React from 'react'

export default function Footer() {
    return (
        <>
        <footer class="page-footer font-small blue" style={{"background-color":"gray"}}>

{/* <!-- Copyright --> */}
<div className="container-fluid">
    <div className='row'>
        <div className='container'>
            <div className='col-md-8' style={{"padding-left":"20%", "padding-top":"10%", "padding-bottom":"5%"}} >
                <tr>
                    <td><h6>Borrow</h6>
                        Cases<br/>
                        How is it work<br/>
                        Loan type<br/>
                    </td>
                    <td style={{"padding-left":"25%"}}><h6>Invest</h6>
                        Cases<br/>
                        How&nbsp;is&nbsp;it&nbsp;work<br/>
                        Loan&nbsp;type<br/></td>
                    <td style={{"padding-left":"40%"}}><h6>About&nbsp;us</h6>
                        Cases<br/>
                        How&nbsp;is&nbsp;it&nbsp;work<br/>
                        Loan&nbsp;type<br/></td>
                </tr>
                
            </div>
        </div>
        
    </div>
</div>
{/* <!-- Copyright --> */}

</footer>
        </>
    )
}