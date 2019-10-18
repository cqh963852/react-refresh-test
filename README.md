# 此仓库是关于 react 的一些简单的总结，可以避免在代码编写时的一些坑

## 一个普通的函数组件在什么时候会更新？（更新：函数重新执行）（例子 1）

- 父组件更新
- 组件 state 更新

## 如何避免这种无关的更新？（父组件更新可能带来的副作用）

- 分割父组件（例子 2）

        将父组件中，与其子组件无关的部分分割，将分割出的组件作为自组件与其组合。
        优势：降低单个组件复杂度。
        劣势：代码成本较大，需要增加一个文件，并且调整当前组件的逻辑。

- 使用 memo（例子 3）

        memo 的演变过程： `React.PureComponent -> React.Memo`
        API解释：当组件的props不变时，组件不会更新
        优势：在原有基础上修改更快
        劣势：可能会因为意外导致memo失效（详见后文）。相比于上一种方法，会多更新一部分组件。

## 亲戚组件之间如何共享数据。（例子 4 基于 例子 1）（手敲例子效果更好）

- context（例子 5 基于 例子 3）（例子 6 基于例子 2）（手敲例子效果更好）

  - 在例子 6 中，为什么数据更新以后，`AXX.tsx`也会刷新？是从父组件刷新导致的吗？还是用了`useContext`的组件导致的？
    测试 1：去除`ABB.tsx`的 counter 引用，观察 `ABB.tsx`是否刷新
    测试 2：给`A.tsx`添加`memo`，观察所有组件刷新情况

    测试 1 之后我们可以发现：即使我们将 `ABB.tsx` 的 `Counter` 组件去除，`AAB.tsx` 依旧会刷新，根据我们之前的推论，这是由父组件更新引起的刷新。而父组件的更新是因为 `Counter`组件 调用`decrease increase` 函数之后引起了`useCounter`中`count`的变化。

    但是测试 2 给了我们迎头一击，以我们上述的推论来看的话，`Counter` 应该停止更新，但是显然不是，所以我们的推论有漏洞。[原因](https://reactjs.org/docs/hooks-reference.html#usecontext)在 react 官网中已经给出。

    所以我们对于 react 组件更新的情况需要再加一条，当 context 中的数据产生变化时，组件更新。

    > When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider

- redux（下次再讲）

## 复杂结构数据共享（context）（例子 7 基于 例子 6）

- 例子 7

  我们只保留`AAB.tsx`和`ABB.tsx`的`Counter`，但是这样的话，Context 似乎没有理由再呆在最外层。那么我们给`A.tsx`增加两个按钮。分别是 increase 和 decrease 按钮。

  哦，看上去修改以后的程序出现了一点意外。为什么之前不再更新的组件也更新了呢？

  让我们检查一下我们的A组件，看看他为什么更新了。

