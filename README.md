#### 记录 moment 时间类库 在 vite 中无法设置中文

需要引入 dist 文件中的 zh-cn

```javascript
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
moment.locale('zh-cn');
```
