{
    'name': 'Website Product Carousel ',
    'summary': 'Easily drag and drop Website Product Carousel and Quickly Configure our Product Carousel',
    'description': 'Easily drag and drop Website Product Carousel and Quickly Configure our Product Carousel',
    'category': 'eCommerce',
    'version': '1.1',
    'author': 'Dynexcel',
    'data': [
        'security/ir.model.access.csv',
        'views/assets.xml',
        'views/carousel_snippet_options.xml',
        'views/website_filter_view.xml',
        'views/product_carousel.xml',
        'views/product_view.xml',
    ],
    'depends': [
        'website_sale',
        'rating',
        'website_sale_wishlist',
    ],
    'images': [
        'static/description/banner.png'
    ],
    'support': 'info@dynexcel.com',
    'installable': True,
    'application': True,
    'auto_install': False,
    'price': 49,
    'license': 'OPL-1',
    'currency': 'EUR',
}
