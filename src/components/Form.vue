<template>
  <div class="wrapper">
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region" v-show="false">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required v-if="false">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource" v-if="false">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc" v-if="false">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tip">
      <p>1.在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括
        Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker(v-model将数据绑定在这些标签上，如 "el-select v-model="form.region"
        placeholder="请选择活动区域"",el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;")
        <br>
        2.Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可:
        el-form上绑定上所选、输入的数据和校验规则:"el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
        class="demo-ruleForm""
        el-form-item上通过prop绑定校验规则对应的字段:"el-form-item label="活动名称" prop="name""
      </p>

      <button @click="str" ref="btn">{{ s }}</button>
      <button @click="str" ref="btn2">{{ s2 }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      s: 1,
      s2: 2,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    console.log(1);
    this.$nextTick(() => {
      console.log(3);
    })
  },
  mounted() {
    console.log(2);
    this.$nextTick(() => {
      console.log(4);
    })
  },
  methods: {
    str() {
      this.s = 3
      this.s2 = 4
      // console.log(this.$refs.btn.innerText);

      setTimeout(() => {
        console.log('set', this.$refs.btn.innerText);
      })

      this.$nextTick(() => {
        console.log('next', this.$refs.btn.innerText);
      })

      console.log(this.$refs.btn2.innerText);

      this.$nextTick(() => {
        console.log('next2', this.$refs.btn2.innerText);

      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 1000px;
  display: flex;

  .form {
    width: 550px;
  }

  .tip {
    flex: 1;
    margin-left: 50px;
  }
}

/deep/ .el-form-item__label::before {
  content: "" !important;
}
</style>