# MySQL DDL နှင့် DML အသေးစိတ် လမ်းညွှန် (MySQL DDL & DML Complete Guide)

MySQL အပါအဝင် Relational Database Management System (RDBMS) များတွင် SQL (Structured Query Language) commands များကို အဓိကအားဖြင့် အမျိုးအစားခွဲခြားထားသည်။ ၎င်းတို့အနက် အသုံးအများဆုံးနှင့် မဖြစ်မနေသိထားရမည့် **DDL** နှင့် **DML** အကြောင်းကို ဤဖိုင်တွင် အသေးစိတ် မြန်မာဘာသာဖြင့် ဖော်ပြထားပါသည်။

---

## မာတိကာ (Table of Contents)
1. [SQL Commands အမျိုးအစားများ အကျဉ်းချုပ်](#၁-sql-commands-အမျိုးအစားများ-အကျဉ်းချုပ်)
2. [DDL (Data Definition Language) ဆိုတာဘာလဲ?](#၂-ddl-data-definition-language-ဆိုတာဘာလဲ)
   - [CREATE (ဖန်တီးခြင်း)](#၂၁-create-command)
   - [ALTER (ဖွဲ့စည်းပုံ ပြင်ဆင်ခြင်း)](#၂၂-alter-command)
   - [DROP (ဖျက်ပစ်ခြင်း)](#၂၃-drop-command)
   - [TRUNCATE (ဒေတာရှင်းလင်းခြင်း)](#၂၄-truncate-command)
   - [RENAME (အမည်ပြောင်းလဲခြင်း)](#၂၅-rename-command)
3. [DML (Data Manipulation Language) ဆိုတာဘာလဲ?](#၃-dml-data-manipulation-language-ဆိုတာဘာလဲ)
   - [INSERT (ဒေတာအသစ် ထည့်သွင်းခြင်း)](#၃၁-insert-command)
   - [UPDATE (ရှိပြီးသားဒေတာ ပြင်ဆင်ခြင်း)](#၃၂-update-command)
   - [DELETE (ဒေတာ ဖျက်ပစ်ခြင်း)](#၃၃-delete-command)
   - [SELECT (ဒေတာ ဆွဲထုတ်ကြည့်ရှုခြင်း / DQL)](#၃၄-select-command)
4. [DDL နှင့် DML အဓိက ကွာခြားချက်များ](#၄-ddl-နှင့်-dml-အဓိက-ကွာခြားချက်များ-comparison)
5. [DELETE vs TRUNCATE vs DROP နှိုင်းယှဉ်ချက်](#၅-delete-vs-truncate-vs-drop-နှိုင်းယှဉ်ချက်)
6. [အရေးကြီးသော အလေ့အကျင့်ကောင်းများ (Best Practices)](#၆-အရေးကြီးသော-အလေ့အကျင့်ကောင်းများ-best-practices)

---

## ၁. SQL Commands အမျိုးအစားများ အကျဉ်းချုပ်

SQL တွင် command များကို လုပ်ဆောင်ချက်အလိုက် အောက်ပါအတိုင်း ခွဲခြားထားပါသည် -

| အမျိုးအစား | နာမည်အပြည့်အစုံ | လုပ်ဆောင်ချက် | အဓိက Commands |
| :--- | :--- | :--- | :--- |
| **DDL** | Data Definition Language | Database နှင့် Table တည်ဆောက်ပုံ (Structure/Schema) ကို သတ်မှတ်ခြင်း | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` |
| **DML** | Data Manipulation Language | Table အတွင်းရှိ Data/Records များကို ကိုင်တွယ်စီမံခြင်း | `INSERT`, `UPDATE`, `DELETE` |
| **DQL** | Data Query Language | Data များကို စစ်ထုတ်ဆွဲထုတ်ခြင်း (DML ထဲတွင်လည်း ထည့်သွင်းဖော်ပြလေ့ရှိသည်) | `SELECT` |
| **DCL** | Data Control Language | User Rights နှင့် Permissions (ခွင့်ပြုချက်များ) ကို စီမံခြင်း | `GRANT`, `REVOKE` |
| **TCL** | Transaction Control Language | Database Transactions များကို စီမံခြင်း | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

---

## ၂. DDL (Data Definition Language) ဆိုတာဘာလဲ?

**DDL** ဆိုသည်မှာ Database နှင့် Table များ၏ **တည်ဆောက်ပုံ (Structure/Schema)** ကို ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖျက်ပစ်ခြင်းများ ပြုလုပ်ရာတွင် အသုံးပြုသော command များဖြစ်သည်။

> [!NOTE]
> **အဓိက မှတ်သားရန်:** DDL commands များသည် **Auto-commit** ဖြစ်သည်။ ဆိုလိုသည်မှာ ၎င်းတို့ကို run ပြီးပါက Transaction `ROLLBACK` ပြုလုပ်၍ မရနိုင်ပါ။

---

### ၂.၁. CREATE Command
Database အသစ် သို့မဟုတ် Table အသစ်၊ View၊ Index များကို တည်ဆောက်ရာတွင် အသုံးပြုသည်။

#### (က) Database ဖန်တီးခြင်း
```sql
-- Database အသစ်တစ်ခု ဖန်တီးခြင်း
CREATE DATABASE company_db;

-- မရှိသေးမှသာ အသစ်ဖန်တီးစေလိုလျှင် (Error မတက်စေရန်)
CREATE DATABASE IF NOT EXISTS company_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- အသုံးပြုမည့် Database ကို ရွေးချယ်ခြင်း
USE company_db;
```

#### (ခ) Table ဖန်တီးခြင်း
Table တည်ဆောက်ရာတွင် Column Name၊ Data Type နှင့် Constraints (ကန့်သတ်ချက်များ) ကို သတ်မှတ်ပေးရသည်။

```sql
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) DEFAULT 0.00,
    hire_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### (ဂ) Foreign Key ပါဝင်သော Table ဖန်တီးခြင်း
```sql
CREATE TABLE IF NOT EXISTS departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

-- employees table နှင့် ချိတ်ဆက်ခြင်း
CREATE TABLE IF NOT EXISTS employee_details (
    emp_id INT PRIMARY KEY,
    dept_id INT,
    address TEXT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);
```

---

### ၂.၂. ALTER Command
ရှိပြီးသား Database သို့မဟုတ် Table ၏ **ဖွဲ့စည်းပုံ (Structure)** ကို ပြင်ဆင်ရန် အသုံးပြုသည်။

#### (က) Column အသစ် ထပ်ထည့်ခြင်း (ADD)
```sql
-- employees table ထဲသို့ phone_number column အသစ်ထည့်ခြင်း
ALTER TABLE employees 
ADD COLUMN phone_number VARCHAR(20) AFTER email;
```

#### (ခ) ရှိပြီးသား Column ၏ Data Type/Constraint ကို ပြင်ဆင်ခြင်း (MODIFY / CHANGE)
```sql
-- Column အမျိုးအစားကို ပြင်ဆင်ခြင်း
ALTER TABLE employees 
MODIFY COLUMN phone_number VARCHAR(30) NULL;

-- Column အမည်နှင့် အမျိုးအစား ၂ ခုစလုံး ပြင်ဆင်ခြင်း
ALTER TABLE employees 
CHANGE COLUMN phone_number contact_number VARCHAR(25);
```

#### (ဂ) Column ဖျက်ထုတ်ခြင်း (DROP COLUMN)
```sql
ALTER TABLE employees 
DROP COLUMN contact_number;
```

#### (ဃ) Constraint အသစ်ထည့်ခြင်း သို့မဟုတ် ဖျက်ခြင်း
```sql
-- Unique Constraint ထည့်ခြင်း
ALTER TABLE employees 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Constraint ကို ပြန်ဖျက်ခြင်း
ALTER TABLE employees 
DROP INDEX unique_email;
```

---

### ၂.၃. DROP Command
Database၊ Table၊ View သို့မဟုတ် Index တစ်ခုလုံးကို **အပြီးတိုင် ဖျက်ပစ်ခြင်း** ဖြစ်သည်။ တည်ဆောက်ပုံရော Data များပါ လုံးဝ ပျက်စီးသွားမည်ဖြစ်သည်။

```sql
-- Table ဖျက်ခြင်း
DROP TABLE IF EXISTS employee_details;

-- Database ဖျက်ခြင်း
DROP DATABASE IF EXISTS company_db;
```

> [!WARNING]
> `DROP` command ကို run လိုက်ပါက table ၏ data ရော structure ပါ လုံးဝပျက်သွားမည်ဖြစ်ပြီး `ROLLBACK` လုပ်၍ မရပါ။ Production တွင် အထူးသတိထား အသုံးပြုရမည်။

---

### ၂.၄. TRUNCATE Command
Table ၏ ဖွဲ့စည်းပုံ (Structure) ကို မဖျက်ဘဲ **Table အတွင်းရှိ Data အားလုံးကို တစ်ပြိုင်နက် သုတ်သင်ရှင်းလင်းခြင်း** ဖြစ်သည်။

```sql
TRUNCATE TABLE employees;
```
- Table ၏ structure နှင့် column များ ကျန်ရှိနေမည်။
- Record (row) များအားလုံး ရှင်းသွားမည်။
- `AUTO_INCREMENT` တန်ဖိုးသည် မူလစတင်ရာ (1) သို့ Reset ဖြစ်သွားမည်။

---

### ၂.၅. RENAME Command
Table အမည်ကို ပြောင်းလဲသတ်မှတ်ရာတွင် အသုံးပြုသည်။

```sql
-- Table အမည် ပြောင်းလဲခြင်း
RENAME TABLE employees TO staff_members;
```

---

## ၃. DML (Data Manipulation Language) ဆိုတာဘာလဲ?

**DML** ဆိုသည်မှာ Table ဖွဲ့စည်းပုံအတွင်းရှိ **တကယ့် Data (Records/Rows)** များကို စီမံခန့်ခွဲသည့် command များဖြစ်သည်။ အဓိကအားဖြင့် **CRUD** (Create, Read, Update, Delete) လုပ်ငန်းစဉ်များတွင် အသုံးပြုပါသည်။

> [!TIP]
> DML commands များသည် ပုံမှန်အားဖြင့် Transaction စနစ်ဖြင့် အလုပ်လုပ်နိုင်ပြီး `COMMIT` မလုပ်မီ `ROLLBACK` ပြန်ခေါ်နိုင်ပါသည်။

---

### ၃.၁. INSERT Command
Table ထဲသို့ Record (ဒေတာအသစ်) များ ထည့်သွင်းရာတွင် အသုံးပြုသည်။

#### (က) Data တစ်ကြောင်းတည်း ထည့်သွင်းခြင်း (Single Row Insert)
```sql
INSERT INTO employees (first_name, last_name, email, salary, hire_date)
VALUES ('Aung', 'Kyaw', 'aungkyaw@example.com', 750000.00, '2024-01-15');
```

#### (ခ) Data အများအပြား တစ်ပြိုင်နက် ထည့်သွင်းခြင်း (Multiple Rows Insert)
```sql
INSERT INTO employees (first_name, last_name, email, salary, hire_date)
VALUES 
    ('Su', 'Myat', 'sumyat@example.com', 850000.00, '2024-02-01'),
    ('Min', 'Khant', 'minkhant@example.com', 600000.00, '2024-03-10'),
    ('Hla', 'Hla', 'hlahla@example.com', 900000.00, '2023-11-20');
```

#### (ဂ) အခြား Table တစ်ခုမှ Data ကူးယူထည့်သွင်းခြင်း (INSERT INTO ... SELECT)
```sql
INSERT INTO archived_employees (first_name, last_name, email)
SELECT first_name, last_name, email 
FROM employees 
WHERE is_active = FALSE;
```

---

### ၃.၂. UPDATE Command
ရှိပြီးသား Record များကို ပြင်ဆင်ဖြည့်စွက်ရာတွင် အသုံးပြုသည်။

#### (က) သတ်မှတ်ထားသော Record ကိုသာ ပြင်ဆင်ခြင်း (`WHERE` Clause ပါဝင်ခြင်း)
```sql
-- ID နံပါတ် 1 ရှိသော ဝန်ထမ်း၏ လစာကို တိုးမြှင့်ခြင်း
UPDATE employees 
SET salary = 800000.00 
WHERE id = 1;
```

#### (ခ) Column အများအပြားကို တစ်ပြိုင်နက် ပြင်ဆင်ခြင်း
```sql
UPDATE employees 
SET salary = salary * 1.10, 
    is_active = TRUE 
WHERE hire_date < '2024-01-01';
```

> [!CAUTION]
> **အလွန်အရေးကြီးသော သတိပြုချက်:** `UPDATE` တွင် `WHERE` clause မပါဝင်ပါက Table တစ်ခုလုံးရှိ Data အားလုံး ပြင်ဆင်သွားမည်ဖြစ်သည်။
> ```sql
> -- သတိ: ဤကဲ့သို့ run လျှင် လူတိုင်းလစာ 0 ဖြစ်သွားမည်!
> UPDATE employees SET salary = 0;
> ```

---

### ၃.၃. DELETE Command
Table ထဲရှိ Record များကို ဖျက်ပစ်ရာတွင် အသုံးပြုသည်။

#### (က) သတ်မှတ်ထားသော Record ကို ဖျက်ခြင်း
```sql
-- ID 3 ရှိသော ဝန်ထမ်းကို ဖျက်ခြင်း
DELETE FROM employees 
WHERE id = 3;
```

#### (ခ) အခြေအနေအရ စစ်ထုတ်ဖျက်ခြင်း
```sql
-- အလုပ်မလုပ်တော့သော (inactive) ဝန်ထမ်းများကို ဖျက်ခြင်း
DELETE FROM employees 
WHERE is_active = FALSE;
```

#### (ဂ) Data အားလုံးကို ဖျက်ခြင်း
```sql
-- Table တစ်ခုလုံးရှိ data အားလုံးကို ဖျက်ခြင်း (Table structure ကျန်ရှိမည်)
DELETE FROM employees;
```

> [!WARNING]
> `DELETE` တွင်လည်း `WHERE` condition မပါဝင်ပါက Table တစ်ခုလုံးရှိ Data အကုန် ပျက်သွားမည်ဖြစ်သည်။

---

### ၃.၄. SELECT Command (DQL / DML)
Data များကို စစ်ထုတ်ကြည့်ရှုဆွဲထုတ်ရာတွင် အသုံးပြုသည်။

```sql
-- Column အားလုံး ကြည့်ရှုခြင်း
SELECT * FROM employees;

-- သတ်မှတ်ထားသော Column များကိုသာ စစ်ထုတ်ကြည့်ရှုခြင်း
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary >= 700000.00 
ORDER BY salary DESC 
LIMIT 5;
```

---

## ၄. DDL နှင့် DML အဓိက ကွာခြားချက်များ (Comparison)

| အကြောင်းအရာ | DDL (Data Definition Language) | DML (Data Manipulation Language) |
| :--- | :--- | :--- |
| **ရည်ရွယ်ချက်** | Database နှင့် Table တည်ဆောက်ပုံကို သတ်မှတ်/ပြင်ဆင်ရန် | Table အတွင်းရှိ Data (Records) များကို စီမံကိုင်တွယ်ရန် |
| **အဓိက Commands** | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` | `INSERT`, `UPDATE`, `DELETE`, `SELECT` |
| **သက်ရောက်မှု** | Table တစ်ခုလုံး၏ Schema/Structure အပေါ် သက်ရောက်သည် | Table ထဲရှိ Row တစ်ခုချင်းစီ (Data) အပေါ် သက်ရောက်သည် |
| **Auto-Commit** | **Auto-commit ဖြစ်သည်** (Run ပြီးလျှင် အလိုအလျောက် အတည်ပြုသည်) | **Auto-commit မဖြစ်ပါ** (Manual Commit/Rollback ပြုလုပ်နိုင်သည်) |
| **Rollback စွမ်းရည်** | `ROLLBACK` ပြန်ခေါ်၍ မရနိုင်ပါ | Transaction သုံးထားပါက `ROLLBACK` ပြန်ခေါ်နိုင်သည် |
| **WHERE Clause** | `WHERE` clause သုံး၍မရပါ | `WHERE` clause ဖြင့် လိုအပ်သော row များကို ရွေးချယ်နိုင်သည် |
| **Triggers** | MySQL တွင် DDL triggers များ မရှိပါ | DML triggers များ (AFTER INSERT, BEFORE UPDATE စသဖြင့်) အလုပ်လုပ်သည် |

---

## ၅. DELETE vs TRUNCATE vs DROP နှိုင်းယှဉ်ချက်

ဒေတာ သို့မဟုတ် ဇယားများ ရှင်းလင်းရာတွင် အသုံးများသော Commands ၃ ခု၏ အဓိက ခြားနားချက်များမှာ အောက်ပါအတိုင်း ဖြစ်သည် -

| အင်္ဂါရပ် | `DELETE` | `TRUNCATE` | `DROP` |
| :--- | :--- | :--- | :--- |
| **အမျိုးအစား** | **DML** | **DDL** | **DDL** |
| **ဘာတွေ ပျက်သလဲ?** | ရွေးချယ်ထားသော Rows များသာ ပျက်သည် | Data အားလုံး ပျက်သည် | Data ရော Table Structure ပါ လုံးဝ ပျက်သည် |
| **Table Structure ကျန်သလား?** | ကျန်ရှိသည် | ကျန်ရှိသည် | မကျန်ပါ (လုံးဝ ပျက်စီးသွားသည်) |
| **WHERE သုံးနိုင်သလား?** | သုံးနိုင်သည် (`WHERE id = 1`) | သုံး၍ မရပါ | သုံး၍ မရပါ |
| **AUTO_INCREMENT Reset?** | မဖြစ်ပါ (နံပါတ် ဆက်သွားမည်) | Reset ဖြစ်သည် (1 မှ ပြန်စမည်) | Table ပျက်သွားသဖြင့် မရှိတော့ပါ |
| **Rollback ရနိုင်သလား?** | ရနိုင်သည် (Transaction သုံးလျှင်) | မရနိုင်ပါ (Auto-commit) | မရနိုင်ပါ (Auto-commit) |
| **အမြန်နှုန်း (Speed)** | နှေးသည် (Row တစ်ခုချင်းစီ Log မှတ်သည်) | အလွန်မြန်သည် | အလွန်မြန်သည် |

---

## ၆. အရေးကြီးသော အလေ့အကျင့်ကောင်းများ (Best Practices)

1. **Transaction ကို အသုံးပြုပါ (DML အတွက်)**:
   အရေးကြီးသော ဒေတာများကို `UPDATE` သို့မဟုတ် `DELETE` မလုပ်မီ Transaction ဖြင့် စမ်းသပ်ပါ -
   ```sql
   START TRANSACTION;
   
   UPDATE employees SET salary = salary + 50000 WHERE id = 1;
   
   -- မှန်ကန်ပါက အတည်ပြုမည်
   COMMIT;
   
   -- မှားယွင်းပါက ပြန်ဖျက်မည်
   -- ROLLBACK;
   ```

2. **Safe Update Mode ကို သတိပြုပါ**:
   MySQL Workbench ကဲ့သို့သော Tool များတွင် Key Column (ဥပမာ- `id`) မပါဘဲ `UPDATE` သို့မဟုတ် `DELETE` လုပ်ခြင်းကို ပိတ်ထားတတ်သည်။ လိုအပ်ပါက သေချာစစ်ဆေးပြီးမှ ဖွင့်/ပိတ် ပြုလုပ်ပါ -
   ```sql
   SET SQL_SAFE_UPDATES = 1; -- 1 ဆိုလျှင် On (လုံခြုံရေးအတွက် ကောင်းသည်)
   ```

3. **Backup အမြဲ ယူထားပါ (DDL မလုပ်မီ)**:
   `DROP TABLE` သို့မဟုတ် `ALTER TABLE` မလုပ်မီ Data Dump / Backup ယူထားရန် အထူးလိုအပ်ပါသည်။
