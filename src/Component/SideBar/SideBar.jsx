import React, { useState } from "react";
import "../../Css/Style.css";
import { Link } from "react-router-dom";

const SideBar = ({ sideBar }) => {
  
 
  return (
    <>
       <section  className={sideBar ? "sidebar_section responsive_nav_bar " : "sidebar_section responsive_nav_bar responsive_bar" } >
      
      <div className="sidebar_main_wrapper">
      
                
      <div className="sidebar_main_heading_section" id="accordionEx" role="tablist" aria-multiselectable="true">
        
          <div className="sidebar_heading_title">
               <Link to='/' className="side_bar_single_sub_menu">
               <div className="logo_plus_sub_menu"><i className="fas fa-home"></i><span> Home</span></div>
              </Link>
          </div>

          <div className="sidebar_heading_title">
              <Link to='/parties' className="side_bar_single_sub_menu">
              <div className="logo_plus_sub_menu"><i className="fas fa-user-friends"></i><span> Parties</span></div>
              <div className="animated_icon"><i className="far fa-plus"></i></div>
             </Link>
         </div>

         <div className="sidebar_heading_title">
          <Link to='/items' className="side_bar_single_sub_menu">
          <div className="logo_plus_sub_menu"><i className="fas fa-shapes"></i><span> Items</span></div>
          <div className="animated_icon"><i className="far fa-plus"></i></div>
         </Link >
        </div>

          <div className="sidebar_heading_title">
              <div role="tab" id="headingSale">
               <a className="side_bar_single_sub_menu final" data-toggle="collapse" data-parent="#accordionEx" href="#collapseSale" aria-expanded="true"
               aria-controls="collapseSale">
               <div className="logo_plus_sub_menu"><i className="fas fa-ballot-check"></i><span> Sale</span></div>
               <div className="animated_icon"> <i className="fas fa-angle-down rotate-icon"></i></div>
              </a>
               </div>
               <div id="collapseSale" className="collapse " role="tabpanel" aria-labelledby="headingSale"
               data-parent="#accordionEx">
                   <div className="sidebar_sub_child_menu_list">
                       <Link to="/saleinvoices">Sale Invoices</Link>
                       <Link to="/estimation">Estimation/ Quotation</Link>
                       <Link to="/paymentin">Payment IN</Link>
                       <Link to="/saleorder">Sale Order</Link>
                       <Link to="/deliverychallan">Delivery Challan</Link>
                       <Link to="/salereturn">Sale Return/ Cr. Note</Link>
                   </div>   
             </div>
    

          </div>


          <div className="sidebar_heading_title">
              <div role="tab" id="headingPurchase">
               <a className="side_bar_single_sub_menu final" data-toggle="collapse" data-parent="#accordionEx" href="#collapsePurchase" aria-expanded="true"
               aria-controls="collapsePurchase">
               <div className="logo_plus_sub_menu"><i className="fas fa-shopping-cart"></i><span> Purchase</span></div>
               <div className="animated_icon"> <i className="fas fa-angle-down rotate-icon"></i></div>
              </a>
               </div>
               <div id="collapsePurchase" className="collapse " role="tabpanel" aria-labelledby="headingPurchase"
               data-parent="#accordionEx">
                   <div className="sidebar_sub_child_menu_list">
                       <Link to="/purchasebills">Purchase Bills</Link>
                       <Link to="/purchaseout">Payment Out</Link>
                       <Link to="/purchaseorder">Purchase Order</Link>
                       <Link to="/purchasereturn">Purchase Return/ Dr. Note</Link>
                   </div>   
             </div>
    

          </div>


           <div className="sidebar_heading_title">
              <Link to='/expenses' className="side_bar_single_sub_menu">
              <div className="logo_plus_sub_menu"><i className="fas fa-wallet"></i><span> Expenses</span></div>
              <div className="animated_icon"><i className="far fa-plus"></i></div>
             </Link>
            </div>


            <div className="sidebar_heading_title">
              <div role="tab" id="headingCash&Bank">
               <a className="side_bar_single_sub_menu final" data-toggle="collapse" data-parent="#accordionEx" href="#collapseCash&Bank" aria-expanded="true"
               aria-controls="collapseCash&Bank">
               <div className="logo_plus_sub_menu"><i className="fas fa-shopping-cart"></i><span> Cash & Bank</span></div>
               <div className="animated_icon"> <i className="fas fa-angle-down rotate-icon"></i></div>
              </a>
               </div>
               <div id="collapseCash&Bank" className="collapse " role="tabpanel" aria-labelledby="headingCash&Bank"
               data-parent="#accordionEx">
                   <div className="sidebar_sub_child_menu_list">
                       <Link to="/cashinhands">Cash In Hand</Link>
                       <Link to="/cheque">Cheques</Link>
                   </div>   
             </div>
          </div>



           </div>
           
      </div>

  </section>
    </>
  );
};

export default SideBar;
