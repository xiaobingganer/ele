<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="变量混合嵌套" name="first">
      <baseText title="变量">
        <div>
          <P
            >@width: 10px; @height: @width + 10px; #header { width: @width;
            height: @height; }</P
          >
          <p>编译后：#header { width: 10px; height: 20px; }</p>
          <p>变量插值使用</p>
          <p class="selecClass">
            1.作为选择器使用 //Variables @my-selector: bananer; //Usage
            .@{my-selector} { font-weight: bold; color: lightblue; }
          </p>
          <p class="color">
            变量作为属性名称使用// Properties @property: color; .@{property} {
            @{property}: red; background-@{property}: green; }
          </p>
          <p>
            变量作为URL使用//URLs @images: "../img"; body { background-image:
            url("@{images}/white-sand.png"); }
          </p>
          <p>
            变量作为@import语句使用 // Variables @themes: "../test"; // Usage
            @import "@{themes}/test.less";
          </p>
          <p class="BL">
            变量作为变量名使用 在.less文件中，可以使用变量定义另一个变量的名称
          </p>
        </div>
      </baseText>
      <baseText title="混合">
        <div>
          <P class="text"
            >混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法
            .bordered { border-top: dotted 1px black; border-bottom: solid 2px
            black; }</P
          >
          <p>
            如果我们希望在其它规则集中使用这些属性#menu a { color: #111;
            .bordered(); } .post a { color: red; .bordered(); }
          </p>
          <p class="text1">
            可以使用...代替零个或多个新参，...前的新参个数就是调用混合时需要传入的最少实参个数
          </p>
          <p class="text1">
            可以使用@arguments来接受所有实参,.animate(@name, @time, ...){
            translation: @arguments; }
          </p>
          <p>
            变量的Lazy Evaluation 变量在使用之前可以不必声明，可以在使用之后声明
            如果存在局部变量，那么该作用域的属性会引用局部变量，如果不存在局部变量，那么后面声明的变量会覆盖前面声明的变量（如果声明了两个局部变量，同理）
            // Lazy Evaluation .lazy-eval { width: @var; @a: 100px; } @var: @a;
            @a: 80px; @a: 40px;
          </p>
        </div>
      </baseText>
      <baseText title="嵌套">
        <div class="qiantao">
          <P class="text"
            >嵌套：CSS 代码：#header { color: black; } #header .navigation {
            font-size: 12px; } #header .logo { width: 300px; }</P
          >
          <p class="text1">
            用 <a href="#">Less</a> 语言我们可以这样书写代码：#header { color:
            black; .navigation { font-size: 12px; } .logo { width: 300px; } }
          </p>
        </div>
      </baseText>
    </el-tab-pane>
    <el-tab-pane
      label="less循环遍历
    "
      name="second"
    >
      <ul class="ul-thead">
        <li v-for="(item, index) in historyList" :key="index">
          <h1 class="executed">{{ item.executed }}</h1>
          <h1 class="stop">{{ item.stop }}</h1>
          <h1 class="executing">{{ item.executing }}</h1>
          <h1 class="waiting">{{ item.waiting }}</h1>
          <h1 class="overtime">{{ item.overtime }}</h1>
          <h1 class="warning">{{ item.warning }}</h1>
        </li>
      </ul>
      <p>
        转义：允许你使用任意字符串作为属性或变量值。任何 ~"anything" 或
        ~'anything' 形式的内容都将按原样输出，除非 interpolation。 @min768:
        ~"(min-width: 768px)"; .element { @media @min768 { font-size: 1.2rem; }
        }
      </p>
    </el-tab-pane>
    <el-tab-pane label="函数" name="third">
      <p>
        Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在Less
        函数手册中有详细介绍。 函数的用法非常简单。下面这个例子将介绍如何利用
        percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低
        25% 并且色相值增加 8 等用法：
      </p>
      <p>
        @base: #f04615; @width: 0.5; .class { width: percentage(@width); //
        returns `50%` color: saturate(@base, 5%); background-color:
        spin(lighten(@base, 25%), 8); }
      </p>
    </el-tab-pane>
    <el-tab-pane label="命名空间和访问符" name="fourth">
      <p>
        希望对混合（mixins）进行分组。你可以用 Less
        更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 #bundle
        之下，为了以后方便重用或分发：
      </p>
      <p>
        #bundle() { .button { display: block; border: 1px solid black;
        background-color: grey; &:hover { background-color: white; } } .tab {
        ... } .citation { ... } }
      </p>
      <p>
        如果我们希望把 .button 类混合到 #header a 中，我们可以这样做： #header a
        { color: orange; #bundle.button(); // 还可以书写为 #bundle > .button
        形式 } 注意：如果不希望它们出现在输出的 CSS 中，例如 #bundle .tab，请将
        () 附加到命名空间（例如 #bundle()）后面。
      </p>
    </el-tab-pane>
    <el-tab-pane label="作用域" name="five">
      <baseText title="作用域">
        <div>
          <p class="selecClass">
            Less 中的作用域与 CSS
            中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。
          </p>
          <p class="color">
            @var: red; #page { @var: white; #header { color: @var; // white }
          </p>
          <p class="BL">
            与 CSS
            自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。因此，下面的
            Less 代码示例和上面的代码示例是相同的：
          </p>
          <p>
            @var: red; #page { #header { color: @var; // white } @var: white; }
          </p>
        </div>
      </baseText>
      <baseText title="避免编译">
        <div>
          <p class="selecClass">
            通过加引号可以避免 Less 编译，直接把内容输出到 CSS 中
          </p>
          <p class="color">
            .banner .inline .header { width: '100px + 100px'; height: 100px +
            100px; }
          </p>
          <p class="BY">
            .banner .inline .header { width: '100px + 100px'; height: 200px; }
          </p>
        </div>
      </baseText>
    </el-tab-pane>
    <el-tab-pane label="函数" name="six">运算</el-tab-pane>
    <el-tab-pane label="命名空间和访问符" name="seven">运算</el-tab-pane>
  </el-tabs>
</template>
<script>
import baseText from "./baseText.vue";
export default {
  components: { baseText },
  data() {
    return {
      activeName: "first",
      input: "",
      historyList: [
        {
          executed: "执行完成",
          stop: "终止",
          executing: "执行",
          waiting: "等待",
          overtime: "超时",
          warning: "警告",
        },
        {
          executed: "执行完成",
          stop: "终止",
          executing: "执行",
          waiting: "等待",
          overtime: "超时",
          warning: "警告",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="less" scoped>
@color: #333;
@list: 400, 500, 600, 800;
@list1: 14px, 15px, 16px, 18px;

//变量当选择器
@select: selecClass;
.@{select} {
  color: skyblue;
}
//变量当属性
@props: color;
.@{props} {
  @{props}: skyblue;
}

//变量作为变量名使用
@size: 12px;
@fontSize: size;
.BL {
  font-size: @@fontSize;
}

.mixins {
  color: @color;
}
.text {
  .mixins();
  font-size: 15px;
  font-weight: extract(@list, 1);
}

.text1 {
  color: red;
  font-size: extract(@list1, 1);
  a {
    text-decoration: none;
    &:hover {
      color: rgb(140, 140, 220);
    }
  }
}

.border(@width,@style,@color) {
  border: @width @style @color;
}
.border1(@width,@style,...) {
  border: @arguments;
}
.qiantao {
  .border(1px, solid, red);
  .text();
  .text1();
}

.ul-thead {
  li {
    float: left;
    p {
      .border(1px, solid, red);
    }
  }
}

// less循环遍历
// rgb参数
@executed: 51, 153, 31;
@stop: 153, 75, 31;
@executing: 153, 75, 31;
@waiting: 46, 75, 229;
@overtime: 229, 156, 46;
@warning: 235, 136, 76;
// 通用类名字段
@linkTypeName: executed, stop, executing, waiting, overtime, warning;
// 类名对应颜色
@linkType: @executed, @stop, @executing, @waiting, @overtime, @warning;
@fontPx: 10px, 12px, 14px, 16px, 18px, 20px;
/* .staClass(@class,@color) {
  .@{class} {
    //注意类名要{}里
    color: rgba(@color);
  }
} */
@len: length(@linkTypeName);
/* .loop(@i) when(@i<=@len) {
  // .staClass(extract(@linkTypeName, @i), extract(@linkType, @i));
  h1:nth-child(@{i}) {
    color: rgba(extract(@linkType, @i));
  }
  .loop(@i+1);
} */
// .loop(1); // 这个一定要写，不然不会调用

each(@linkTypeName,{
  .@{value}{
    color:rgba(extract(@linkType,@index));
    font-size: extract(@fontPx,@index);
  }
});
//each和上面的loop效果一样
/* each(@linkType,{
  h1:nth-child(@{index}) {
    color: rgba(extract(@linkType, @index));
    font-size: extract(@fontPx,@index);
  }
}) */


//避免编译
.BY {
  font-size: "10px+20px";
  font-weight: 600;
}
</style>
