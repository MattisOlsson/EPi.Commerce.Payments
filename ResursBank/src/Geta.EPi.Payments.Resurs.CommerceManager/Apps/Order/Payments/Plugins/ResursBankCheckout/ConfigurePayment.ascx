﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ConfigurePayment.ascx.cs" Inherits="Geta.EPi.Payments.Resurs.CommerceManager.Apps.Order.Payments.Plugins.ResursBankCheckout.ConfigurePayment" %>

<h2>Service setting</h2>

<table class="DataForm">
    <tbody>
         <tr>
            <td class="FormLabelCell">Username:</td>
            <td class="FormFieldCell">
                <asp:TextBox runat="server" ID="txtUserName" />
                <asp:RequiredFieldValidator ID="val1" runat="server" ControlToValidate="txtUserName" ErrorMessage="Username is required." />
            </td>
        </tr>
        <tr>
            <td class="FormLabelCell">Password:</td>
            <td class="FormFieldCell">
                <asp:TextBox runat="server" ID="txtPassword"  />
                <asp:RequiredFieldValidator ID="val3" runat="server" ControlToValidate="txtPassword" ErrorMessage="The shared secret is required." />
            </td>
        </tr>
        <tr>
            <td class="FormLabelCell">Lanuage:</td>
            <td class="FormFieldCell">
                <asp:TextBox runat="server" ID="txtLanguage"  />
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtPassword" ErrorMessage="The shared secret is required." />
            </td>
        </tr>
    </tbody>
</table>