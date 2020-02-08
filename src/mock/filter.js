export default {
  getFilter: () => {
    return {
      navTab: [
        {
          name: '综合排序',
          icon: 'caret-down',
          condition: '0'
        },
        {
          name: '距离最近',
          condition: 'distance',
          icon: null
        },
        {
          name: '品质联盟',
          condition: 'is_premium',
          icon: null
        },
        {
          name: '筛选',
          icon: 'filter',
          condition: '0'
        }
      ],
      sortBy: [
        {
          name: '综合排序',
          check: false,
          code: ''
        },
        {
          name: '好评优先',
          check: false,
          code: 'rating'
        },
        {
          name: '销量最高',
          check: false,
          code: 'recent_order_num'
        },
        {
          name: '起送价最低',
          check: false,
          code: 'float_minimum_order_amount'
        },
        {
          name: '配送最快',
          check: false,
          code: 'order_lead_time'
        },
        {
          name: '配送费最低',
          check: false,
          code: 'float_delivery_fee'
        },
        {
          name: '人均从低到高',
          check: false,
          code: ''
        },
        {
          name: '人均从高到低',
          check: false,
          code: ''
        },
        {
          name: '通用排序',
          check: false,
          code: ''
        }
      ],
      screenBy: [
        {
          title: '商家服务（可多选）',
          id: 'MPI',
          data: [
            {
              name: '蜂鸟专送',
              icon:
                'https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png',
              select: false,
              code: 'delivery_mode'
            },
            {
              name: '品牌商家',
              icon:
                'https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png',
              select: false,
              code: 'is_premium'
            },
            {
              name: '新店',
              icon:
                'https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png',
              select: false,
              code: ''
            },
            {
              name: '食安保',
              icon:
                'https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png',
              select: false,
              code: ''
            },
            {
              name: '开发票',
              icon:
                'https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png',
              select: false,
              code: ''
            }
          ]
        },
        {
          title: '优惠活动（单选）',
          id: 'offer',
          data: [
            {
              name: '首单立减',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '门店新客立减',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '满减优惠',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '下单返红包',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '进店领红包',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '配送费优惠',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '赠品优惠',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '特价商品',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '品质联盟红包',
              icon: null,
              select: false,
              code: ''
            }
          ]
        },
        {
          title: '人均消费',
          id: 'per',
          data: [
            {
              name: '¥20以下',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '¥20-¥40',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '¥40-¥60',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '¥60-¥80',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '¥80-¥100',
              icon: null,
              select: false,
              code: ''
            },
            {
              name: '¥100以上',
              icon: null,
              select: false,
              code: ''
            }
          ]
        }
      ]
    };
  }
};
