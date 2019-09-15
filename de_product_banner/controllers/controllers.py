# -*- coding: utf-8 -*-
from odoo import http

# class DeProductBanner(http.Controller):
#     @http.route('/de_product_banner/de_product_banner/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/de_product_banner/de_product_banner/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('de_product_banner.listing', {
#             'root': '/de_product_banner/de_product_banner',
#             'objects': http.request.env['de_product_banner.de_product_banner'].search([]),
#         })

#     @http.route('/de_product_banner/de_product_banner/objects/<model("de_product_banner.de_product_banner"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('de_product_banner.object', {
#             'object': obj
#         })