import Vue from 'vue'
import * as filters from '~/utils/filters.js'

// use fiters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
