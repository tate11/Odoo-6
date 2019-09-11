# -*- coding: utf-8 -*-

from odoo import models, fields, api

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.onchange('product_id')
    def _onchange_product_id(self):
        res = super(SaleOrder, self)._onchange_product_id()
        if self.product_id:
            ana_tags = self.product_id.product_tmpl_id._get_product_analytic_tags()
            self.analytic_tag_ids = ana_tags.ids
        return res