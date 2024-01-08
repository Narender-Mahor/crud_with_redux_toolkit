import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action

export const createUser = createAsyncThunk("createUser", async (data) => {
  const response = await fetch(
    "https://657ecaa43e3f5b18946425af.mockapi.io/crud",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

// read action

export const showUser = createAsyncThunk("showUser", async () => {
  const response = await fetch(
    "https://657ecaa43e3f5b18946425af.mockapi.io/crud"
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

//delete action

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const response = await fetch(
    `https://657ecaa43e3f5b18946425af.mockapi.io/crud/${id}`,
    { method: "DELETE" }
  );

  try {
    const result = await response.json();
    console.log("deleted result");
    return result;
  } catch (error) {
    return error;
  }
});

//update action

export const updateUser = createAsyncThunk("updateUser", async (data) => {
  const response = await fetch(
    `https://657ecaa43e3f5b18946425af.mockapi.io/crud/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = "idle";
        state.users = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        console.log("state value", state);
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("delete user", action.payload);
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((elem) => {
          return elem.id === action.payload.id ? action.payload : elem;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userDetail;

export const { searchUser } = userDetail.actions;
