import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import PartiesPage from "../../Pages/PartiesPage";
import DepartmentPage from "../../Pages/DepartmentPage";
import SaleInvoicesPage from "../../Pages/SaleInvoicesPage";
import CashInHandsPage from "../../Pages/CashInHandsPage";
import LoanInAccountsPage from "../../Pages/LoanInAccountsPage";
import ReportsPage from "../../Pages/ReportsPage";
import SettingPage from "../../Pages/SettingPage";
import PurchaseOutPage from "../../Pages/PurchaseOutPage";
import PurchaseOrderPage from "../../Pages/PurchaseOrderPage";
import PurchaseReturnPage from "../../Pages/PurchaseReturnPage";
import ExpensesPage from "../../Pages/ExpensesPage";
import BankAccountsPage from "../../Pages/BankAccountsPage";
import ChequePage from "../../Pages/ChequePage";
import EstimationPage from "../../Pages/EstimationPage";
import PaymentInPage from "../../Pages/PaymentInPage";
import SaleOrderPage from "../../Pages/SaleOrderPage";
import DeliveryChallanPage from "../../Pages/DeliveryChallanPage";
import SaleReturnPage from "../../Pages/SaleReturnPage";
import PurchaseBillsPage from "../../Pages/PurchaseBillsPage";




const BodyContent = ({ sideBar }) => {
  return (
    <>
      <section
        class={
          sideBar
            ? "content_body_wrapper"
            : "content_body_wrapper responsive_content_body"
        }
      >
        <div class="content_body_wrapper_container">
          <div class="content_body_wrapper_main">
            <Router>
              <Switch>
              <Route exact path="/">
                 <HomePage/>
                </Route>
                <Route path="/parties">
                  <PartiesPage/>
                </Route>
                <Route path="/department">
                  <DepartmentPage/>
                </Route>
                 <Route path="/saleinvoices">
                   <SaleInvoicesPage/>
                </Route>
                <Route path="/estimation">
                  <EstimationPage/>
                </Route>
                <Route path="/paymentin">
                   <PaymentInPage/>
                </Route>
                <Route path="/saleorder">
                   <SaleOrderPage/>
                </Route>
                <Route path="/deliverychallan">
                   <DeliveryChallanPage/>
                </Route>
                <Route path="/salereturn">
                   <SaleReturnPage/>
                </Route>
                <Route path="/purchasebills">
                   <PurchaseBillsPage/>
                </Route>
                <Route path="/purchaseout">
                   <PurchaseOutPage/>
                </Route>
                <Route path="/purchaseorder">
                   <PurchaseOrderPage/>
                </Route>
                <Route path="/purchasereturn">
                   <PurchaseReturnPage/>
                </Route>
                <Route path="/expenses">
                   <ExpensesPage/>
                </Route>
                <Route path="/bankaccounts">
                   <BankAccountsPage/>
                </Route>
                <Route path="/cashinhands">
                   <CashInHandsPage/>
                </Route>
                <Route path="/cheque">
                   <ChequePage/>
                </Route>
                <Route path="/loaninaccounts">
                   <LoanInAccountsPage/>
                </Route>
                <Route path="/reports">
                   <ReportsPage/>
                </Route>
                <Route path="/setting">
                   <SettingPage/>
                </Route>
               
              </Switch>
            </Router>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyContent;
