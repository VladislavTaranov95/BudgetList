import Vue from 'vue'
import lang from 'element-ui/src/locale/lang/en'
import locale from 'element-ui/src/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert
} from 'element-ui'

locale.use(lang)

const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert
]

elements.forEach(el => Vue.use(el, { locale }))