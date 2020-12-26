# Database for shopcenter

## Product model

- \_id: ObjectId()
- pid: String
- name: String
- category: String

- tags: Array

  - {String}

- stock: Number
- images: Array

  - {Object}
    - URL: String
    - alt: String

- ratings: Object

  - count: Number
  - breakdown: Object
    - 5: Number
    - 4: Number
    - 3: Number
    - 2: Number
    - 1: Number
  - base: Number
  - avg: Number

- price: Object

  - minPrice: Number
  - splPrice: Number
  - maxPrice: Number

- body: Object

  - caption: String
  - desc: String

- variants: Array
  - {Object}
    - pid: String
    - images: Array
      - {Object}
        - URL: String
        - alt: String
