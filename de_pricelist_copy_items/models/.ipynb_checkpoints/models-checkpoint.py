# -*- coding: utf-8 -*-

from datetime import datetime
from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError

class PriceList(models.Model):
    _inherit = 'product.pricelist'
    
    ref_pricelist_ids = fields.Many2many('product.pricelist', relation='ref_product_pricelist_product_pricelist_rel', column1='id1', culomn2='id2', string='Ref. Pricelist', stored=True)
    
    

class PriceListItem(models.Model):
    _inherit = 'product.pricelist.item'

    price_on_basepricelist = fields.Float(string="Price on base pricelist",compute="_calculate_price_on_basepricelist")
    price_on_basepricelist1 = fields.Float(string="Price 100",default='100')
    
    @api.one
    @api.depends('pricelist_id')
    def _calculate_price_on_basepricelist(self):
        from_amount = 200
        date = self._context.get('date') or fields.Date.today()
        company_id = self._context.get('company_id') or self.env['res.users']._get_company().id
        currency = self.pricelist_id.currency_id
        if self.base_pricelist_id:
            if self.applied_on == '1_product':
                from_amount = self.env['product.pricelist.item'].search([('pricelist_id', '=', self.base_pricelist_id.id),('product_tmpl_id', '=', self.product_tmpl_id.id),('min_quantity', '=', self.min_quantity)],limit=1).fixed_price
            elif self.applied_on == '0_product_variant':
                from_amount = self.env['product.pricelist.item'].search([('pricelist_id', '=', self.base_pricelist_id.id),('product_id', '=', self.product_id.id),('min_quantity', '=', self.min_quantity)],limit=1).fixed_price
            else:
                from_amount = 0
            self.price_on_basepricelist = currency._convert(abs(from_amount),currency,company_id,date)
            
    
    @api.multi
    def _write(self, values):
        res = super(PriceListItem, self)._write(values)
       
        return res
    