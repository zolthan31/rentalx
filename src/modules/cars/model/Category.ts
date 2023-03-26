const { v4: uuidV4 } = require("uuid");

class Category {
  id?: string;
  name?: string;
  description?: string;
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
