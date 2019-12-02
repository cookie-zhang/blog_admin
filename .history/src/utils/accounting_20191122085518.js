/**
 * Created by zjf on 2019-5-24 0024.
 * 金额格式化处理
 */
import accounting from 'accounting'

// 保留两位小数，展示千分位
export function handleMoney(money) {
  return accounting.formatMoney(money, '')
}