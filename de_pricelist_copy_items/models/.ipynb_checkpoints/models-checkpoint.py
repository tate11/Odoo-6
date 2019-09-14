# -*- coding: utf-8 -*-

from datetime import datetime
from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError

class PriceList(models.Model):
    _inherit = 'product.pricelist'
    
    ref_pricelist_ids = fields.Many2many('product.pricelist', relation='ref_product_pricelist_product_pricelist_rel', column1='id1', culomn2='id2', string='Ref. Pricelist', stored=True)

class PriceList(models.Model):
    _inherit = 'product.pricelist.item'
"""   
    @api.multi
    def create(self):
        pricelist_item = self.env['product.pricelist.item']
        
        res = super(PriceList, self).create()
        return res
"""
# class de_pricelist_copy_items(models.Model):
#     _name = 'de_pricelist_copy_items.de_pricelist_copy_items'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100