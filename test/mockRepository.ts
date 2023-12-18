export const mockRepository = {
    find: () => {
      return {
        exec() {
          return [
            {
              _id: "65524113ee6a872790069e66",
              title: "string",
              authors: ["65524101ee6a872790069e64"],
              fileCover: "string",
              fileName: "string",
              fileBook: "string",
              views: 0,
              __v: 0
          },
          {
              _id: "655246b17e067dd05f3c03f7",
              title: "Война и Мир",
              authors: ["65524101ee6a872790069e64"],
              fileCover: "string",
              fileName: "string",
              fileBook: "string",
              views: 0,
              __v: 0
          },
        ];
        }
      }
    },

    create: (data) => {
        return {
            _id: "65808cd5c9f02dfad6728e6b",
            __v: 0,
            views: 0,
            ...data
        }
    },

    findById: (id) => {
        return {
            _id: id,
            title: "Война и Мир",
            authors: ["65524101ee6a872790069e64"],
            fileCover: "string",
            fileName: "string",
            fileBook: "string",
            views: 0,
            __v: 0
        }

    },

    findByIdAndUpdate: (id, data) => {
        return {
            exec() {
                return {
                    _id: id,
                    title: "Война и Мир",
                    authors: ["65524101ee6a872790069e64"],
                    fileCover: "string",
                    fileName: "string",
                    fileBook: "string",
                    views: 0,
                    __v: 0,
                    ...data
                }
            }}
    },

    findByIdAndDelete: (id) => {
        return {
            exec() {
                return {
                    _id: id,
                    title: "Война и Мир",
                    authors: ["65524101ee6a872790069e64"],
                    fileCover: "string",
                    fileName: "string",
                    fileBook: "string",
                    views: 0,
                    __v: 0,
                }
            }}
    }
  };