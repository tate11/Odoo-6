# -*- coding: utf-8 -*-

from odoo import models, fields, api

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.onchange('product_id')
    def _onchange_product_id(self):
        res = super(SaleOrder, self)._onchange_product_id()
        inv_type = self.invoice_id.type
        if self.product_id:
            ana_accounts = self.product_id.product_tmpl_id._get_product_analytic_accounts()
            self.account_analytic_id = ana_account.id
        return res

    @api.model
    def create(self, vals):
        inv_type = self.env.context.get('inv_type', 'out_invoice')
        if vals.get('product_id') and inv_type and \
                not vals.get('account_analytic_id'):
            product = self.env['product.product'].browse(
                vals.get('product_id'))
            ana_accounts = product.product_tmpl_id.\
                _get_product_analytic_accounts()
            ana_account = ana_accounts[INV_TYPE_MAP[inv_type]]
            vals['account_analytic_id'] = ana_account.id
        return super(AccountInvoiceLine, self).create(vals)