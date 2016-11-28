import myApi from '../../gateways/my-api'
import router from '../../router'

const state = {
  personalInfo: {
    firstname: null,
    phone: null,
    email: null,
    address: null,
    state: null,
    pincode: null,
    city: null
  },
  productInfo: {
    products: []
  },
  orderInfo: {
    number: null,
    orderId: null
  }
}

const mutations = {
  ADD_PRODUCT_TO_CART: (state, productInfo) => {
    state.productInfo.products = [...state.productInfo.products,
      Object.assign({}, productInfo.product, {selectedVariant: productInfo.variant})
    ]
  },
  SET_PERSONALINFO: (state, details) => {
    state.personalInfo = Object.assign({}, details)
  },
  SET_NUMBER: (state, number) => {
    state.orderInfo.number = number
  }
}

const actions = {
  CREATE_ORDER: (state, variantId) => {
    return myApi.post(('orders'), {
      'order': {
        'line_items': [
          { 'variant_id': variantId, 'quantity': 1 }
        ]
      }
    }).then((response) => {
      state.commit('SET_NUMBER', response.data.number)
    })
  },
  CREATE_ORDER_FROM_CART: (state) => {
    var lineItems = state.state.productInfo.products.map(
      product => { return { 'variant_id': product.selectedVariant.id, 'quantity': 1 } }
    )
    return myApi.post(('orders'), {
      'order': {
        'line_items': lineItems
      }
    }).then((response) => {
      state.commit('SET_NUMBER', response.data.number)
    })
  },
  UPDATE_INFO_AND_PUT: (state, details) => {
    state.commit('SET_PERSONALINFO', details)
    var checkoutPut = 'checkouts/'.concat(state.state.orderInfo.number)
    return myApi.put((checkoutPut), {
      'order': {
        'bill_address_attributes': {
          'firstname': details.firstname,
          'lastname': null,
          'address1': details.address,
          'city': details.city,
          'phone': details.phone,
          'zipcode': details.pincode,
          'state_id': 1,
          'country_id': 1
        },
        'ship_address_attributes': {
          'firstname': state.state.personalInfo.firstname,
          'lastname': null,
          'address1': state.state.personalInfo.address,
          'city': state.state.personalInfo.city,
          'phone': state.state.personalInfo.phone,
          'zipcode': state.state.personalInfo.pincode,
          'state_id': 1,
          'country_id': 1
        }
      }
    }).then(
      response => console.log(JSON.stringify(response))
    )
  },
  GET_ORDER_DETAILS: (state, number) => {
    /* eslint handle-callback-err: "off" */
    return myApi.get('orders/'.concat(number)).then((response) => {
      response.data.line_items.forEach(lineItem => {
        myApi.get('products/'.concat(lineItem.variant.product_id)).then((prodResponse) => {
          state.commit('ADD_PRODUCT_TO_CART', {product: prodResponse.data, variant: lineItem.variant})
        },
        error => {
          console.log('Inside error, fetching product line items failed')
          router.push({path: '/'})
        })
      })
    },
    error => router.push({path: '/'})
    )
  }
}

export default {
  state,
  actions,
  mutations
}
