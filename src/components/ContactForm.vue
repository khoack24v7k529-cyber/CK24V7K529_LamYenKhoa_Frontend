<template>
  <Form @submit="submitContact" :validation-schema="contactFormSchema">
    <div class="form-group">
      <label for="name">Tên</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="contactLocal.name"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>

    <div class="form-group">
      <label for="email">E-mail</label>
      <Field
        name="email"
        type="email"
        class="form-control"
        v-model="contactLocal.email"
      />
      <ErrorMessage name="email" class="error-feedback" />
    </div>

    <div class="form-group">
      <label for="address">Địa chỉ</label>
      <Field
        name="address"
        type="text"
        class="form-control"
        v-model="contactLocal.address"
      />
      <ErrorMessage name="address" class="error-feedback" />
    </div>

    <div class="form-group">
      <label for="phone">Điện thoại</label>
      <Field
        name="phone"
        type="tel"
        class="form-control"
        v-model="contactLocal.phone"
      />
      <ErrorMessage name="phone" class="error-feedback" />
    </div>

    <div class="form-group">
      <label for="favorite">Liên hệ yêu thích</label>
      <input
        id="favorite"
        name="favorite"
        type="text"
        class="form-control"
        v-model="contactLocal.favorite"
      />
    </div>
    <div class="form-group">
      <label><strong>Sở thích</strong></label>

      <div class="form-check">
        <input
          id="sport"
          type="checkbox"
          class="form-check-input"
          value="Thể thao"
          v-model="contactLocal.hobbies"
        />
        <label for="sport" class="form-check-label"> Thể thao </label>
      </div>

      <div class="form-check">
        <input
          id="music"
          type="checkbox"
          class="form-check-input"
          value="Âm nhạc"
          v-model="contactLocal.hobbies"
        />
        <label for="music" class="form-check-label"> Âm nhạc </label>
      </div>

      <div class="form-check">
        <input
          id="travel"
          type="checkbox"
          class="form-check-input"
          value="Du lịch"
          v-model="contactLocal.hobbies"
        />
        <label for="travel" class="form-check-label"> Du lịch </label>
      </div>

      <div class="form-check">
        <input
          id="reading"
          type="checkbox"
          class="form-check-input"
          value="Đọc sách"
          v-model="contactLocal.hobbies"
        />
        <label for="reading" class="form-check-label"> Đọc sách </label>
      </div>
    </div>

    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>

      <button
        v-if="contactLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteContact"
      >
        Xóa
      </button>

      <button type="button" class="ml-2 btn btn-danger" @click="Cancel">
        Thoát
      </button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  emits: ["submit:contact", "delete:contact"],

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },

  data() {
    const contactFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),

      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),

      address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),

      phone: yup
        .string()
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Số điện thoại không hợp lệ.",
        ),
    });

    return {
      contactLocal: {
        ...this.contact,

        // favoriteText: this.contact.favoriteText || "",

        favorite: this.contact.favorite || "",

        hobbies: this.contact.hobbies || [],
      },
      contactFormSchema,
    };
  },

  methods: {
    submitContact() {
      this.$emit("submit:contact", this.contactLocal);
    },

    deleteContact() {
      this.$emit("delete:contact", this.contactLocal._id);
    },

    Cancel() {
      const reply = window.confirm(
        "You have unsaved changes! Do you want to leave?",
      );

      if (!reply) {
        return false;
      }

      this.$router.push({ name: "contactbook" });
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
