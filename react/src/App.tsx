import React, { useState } from 'react';
import DOG from "./dog.jpg";
import IMG from "./image.jpg";
import type { SelectChangeEvent } from '@mui/material';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Checkbox,
  Button,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Drawer,
  IconButton,
  Chip,
  OutlinedInput,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Создаем кастомную тему
const theme = createTheme({
  palette: {
    primary: {
      main: '#ad79b5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

const PetFriendsApp: React.FC = () => {
  const themeHook = useTheme();
  const isDesktop = useMediaQuery(themeHook.breakpoints.up('lg'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);

  // Данные для таблицы питомцев
  const petsData = [
    { name: 'Барсик', type: 'Кот', breed: 'Британский', age: '2 года', status: 'Ищет дом' },
    { name: 'Шарик', type: 'Собака', breed: 'Лабрадор', age: '4 года', status: 'На передержке' },
    { name: 'Мурка', type: 'Кошка', breed: 'Дворовая', age: '1 год', status: 'Ищет дом' },
    { name: 'Гав', type: 'Собака', breed: 'Овчарка', age: '3 года', status: 'Лечение' },
    { name: 'Рыжик', type: 'Кот', breed: 'Персидский', age: '5 лет', status: 'Ищет дом' },
    { name: 'Братья', type: 'Щенки', breed: 'Дворняжки', age: '2 месяца', status: 'Ищут дом' },
  ];

  // Данные для полезных ссылок
  const usefulLinks = [
    { href: 'http://kubsu.ru/', text: 'http протокол на kubsu.ru' },
    { href: 'https://kubsu.ru/', text: 'https протокол на kubsu.ru' },
    {
      href: 'https://www.youtube.com',
      text: 'Ссылка с изображением',
      isImage: true
    },
    { href: '/inside', text: 'Сокращенная ссылка на внутреннюю страницу' },
    { href: '/', text: 'Сокращенная ссылка на главную страницу' },
    { href: '#fragment', text: 'Ссылка на фрагмент текущей страницы' },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/?a=a&b=b&c=c',
      text: 'Ссылка с тремя параметрами в URL'
    },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/?id=pupupu',
      text: 'Ссылка с параметром id в URL'
    },
    { href: 'inside.html', text: 'Относительная на страницу в текущем каталоге' },
    { href: 'about/index.html', text: 'Относительная на страницу в каталоге about' },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/',
      text: 'YouTube для малого бизнеса',
      isContextual: true
    },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/#some',
      text: 'Ссылка на фрагмент страницы стороннего сайта'
    },
    { href: '', text: 'Ссылка с пустым href' },
    { text: 'Ссылка без href' },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/',
      text: 'Ссылка, по которой запрещен переход поисковикам',
      rel: 'nofollow'
    },
    {
      href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/',
      text: 'Запрещенная для индексации поисковиками',
      rel: 'noindex'
    },
    {
      href: 'ftp://login:pass@fileaddress/somebody.txt',
      text: 'Ссылка на файл на сервере FTP с авторизацией'
    },
  ];

  // Ссылки с title атрибутами
  const titledLinks = [
    { href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/', text: 'Клик на ссылку', title: 'YouTube для малого бизнеса' },
    { href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/', text: 'Клик на ссылку', title: 'Маркетинг на YouTube' },
    { href: 'https://www.youtube.com/intl/ALL_ru/ads/youtube-for-small-business/', text: 'Клик на ссылку', title: 'Реклама на платформе' },
  ];

  // Обработчик для ввода телефона (только числа)
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    e.target.value = value;
  };

  // Обработчик для мультиселекта
  const handlePetSelectionChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedPets(typeof value === 'string' ? value.split(',') : value);
  };

  // Навигация для мобильных устройств
  const MobileNavigation = () => (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      width: '100%',
      p: 2
    }}>
      <Button
        href="#pets-section"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 600,
          fontSize: '1rem',
          py: 1.5,
          '&:hover': {
            backgroundColor: 'primary.dark',
          }
        }}
        onClick={() => setMobileMenuOpen(false)}
      >
        Наши питомцы
      </Button>
      <Button
        href="#links-section"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 600,
          fontSize: '1rem',
          py: 1.5,
          '&:hover': {
            backgroundColor: 'primary.dark',
          }
        }}
        onClick={() => setMobileMenuOpen(false)}
      >
        Полезные ссылки
      </Button>
      <Button
        href="#form-section"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 600,
          fontSize: '1rem',
          py: 1.5,
          '&:hover': {
            backgroundColor: 'primary.dark',
          }
        }}
        onClick={() => setMobileMenuOpen(false)}
      >
        Заявка на опеку
      </Button>
    </Box>
  );

  // Навигация для десктопа
  const DesktopNavigation = () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Link
        href="#pets-section"
        color="inherit"
        underline="hover"
        sx={{
          fontWeight: 600,
          fontSize: '1rem',
          '&:hover': {
            color: 'primary.light'
          }
        }}
      >
        Наши питомцы
      </Link>
      <Link
        href="#links-section"
        color="inherit"
        underline="hover"
        sx={{
          fontWeight: 600,
          fontSize: '1rem',
          '&:hover': {
            color: 'primary.light'
          }
        }}
      >
        Полезные ссылки
      </Link>
      <Link
        href="#form-section"
        color="inherit"
        underline="hover"
        sx={{
          fontWeight: 600,
          fontSize: '1rem',
          '&:hover': {
            color: 'primary.light'
          }
        }}
      >
        Заявка на опеку
      </Link>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component="img"
              src={DOG}
              alt="Логотип собаки"
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%'
              }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, ml: "20px" }}>
              Pet Friends
            </Typography>
          </Box>

          {isDesktop ? (
            <DesktopNavigation />
          ) : (
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Мобильное меню */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          },
        }}
      >
        <MobileNavigation />
      </Drawer>

      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Полезные ссылки */}
          <Grid item xs={12} id="links-section" sx={{ order: isDesktop ? 1 : 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Полезные ссылки
                </Typography>

                <List>
                  {usefulLinks.map((link, index) => (
                    <ListItem key={index} divider>
                      {link.isImage ? (
                        <Link href={link.href}>
                          <Box
                            component="img"
                            src={IMG}
                            alt="Картинка"
                            sx={{ width: 100, height: 100 }}
                          />
                        </Link>
                      ) : link.isContextual ? (
                        <Typography sx={{ fontWeight: 500 }}>
                          Контекстная в тексте абзаца:{' '}
                          <Link href={link.href} sx={{ fontWeight: 600 }}>{link.text}</Link>
                        </Typography>
                      ) : link.text === 'Ссылка без href' ? (
                        <Typography component="span" sx={{ cursor: 'pointer', color: 'primary.main', fontWeight: 500 }}>
                          {link.text}
                        </Typography>
                      ) : (
                        <Link
                          href={link.href}
                          rel={link.rel}
                          sx={{ display: 'block', fontWeight: 500 }}
                        >
                          {link.text}
                        </Link>
                      )}
                    </ListItem>
                  ))}

                  {/* Карта-изображение */}
                  <ListItem divider>
                    <Typography gutterBottom sx={{ fontWeight: 500 }}>
                      Ссылки из прямоугольных и круглых областей картинки:
                    </Typography>
                    <Box sx={{ position: 'relative', display: 'inline-block' }}>
                      <Box
                        component="img"
                        src={IMG}
                        alt="Ещё картинка"
                        sx={{ width: 200, height: 100 }}
                        useMap="#rect"
                      />
                    </Box>
                  </ListItem>

                  {/* Нумерованный список ссылок с title */}
                  <ListItem>
                    <Box>
                      <Typography gutterBottom sx={{ fontWeight: 500 }}>
                        Нумерованный список ссылок с подписями title:
                      </Typography>
                      <List component="ol" sx={{ listStyle: 'decimal', pl: 4 }}>
                        {titledLinks.map((link, index) => (
                          <ListItem key={index} sx={{ display: 'list-item' }}>
                            <Link href={link.href} title={link.title} sx={{ fontWeight: 500 }}>
                              {link.text}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Таблица питомцев */}
          <Grid item xs={12} id="pets-section" sx={{ order: isDesktop ? 2 : 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Наши питомцы
                </Typography>

                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Кличка</strong></TableCell>
                        <TableCell><strong>Вид</strong></TableCell>
                        <TableCell><strong>Порода</strong></TableCell>
                        <TableCell><strong>Возраст</strong></TableCell>
                        <TableCell><strong>Статус</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {petsData.map((pet, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ fontWeight: 500 }}>{pet.name}</TableCell>
                          <TableCell sx={{ fontWeight: 500 }}>{pet.type}</TableCell>
                          <TableCell sx={{ fontWeight: 500 }}>{pet.breed}</TableCell>
                          <TableCell sx={{ fontWeight: 500 }}>{pet.age}</TableCell>
                          <TableCell sx={{ fontWeight: 500 }}>{pet.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Форма заявки */}
          <Grid item xs={12} id="form-section" sx={{ order: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Заявка на опеку
                </Typography>

                <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="ФИО"
                        name="fio"
                        required
                        InputProps={{
                          sx: { fontWeight: 500 }
                        }}
                        InputLabelProps={{
                          sx: { fontWeight: 500 }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Телефон"
                        name="phone"
                        type="tel"
                        required
                        onInput={handlePhoneInput}
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                        }}
                        InputProps={{
                          sx: { fontWeight: 500 }
                        }}
                        InputLabelProps={{
                          sx: { fontWeight: 500 }
                        }}
                        placeholder="Только цифры"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="E-mail"
                        name="email"
                        type="email"
                        required
                        InputProps={{
                          sx: { fontWeight: 500 }
                        }}
                        InputLabelProps={{
                          sx: { fontWeight: 500 }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Дата рождения"
                        name="birthdate"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                          sx: { fontWeight: 500 }
                        }}
                        required
                        InputProps={{
                          sx: { fontWeight: 500 }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                          Пол
                        </FormLabel>
                        <RadioGroup row name="gender">
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label={<Typography sx={{ fontWeight: 500 }}>Мужской</Typography>}
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label={<Typography sx={{ fontWeight: 500 }}>Женский</Typography>}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel sx={{ fontWeight: 500 }}>Предпочтительные виды питомцев</InputLabel>
                        <Select
                          multiple
                          value={selectedPets}
                          onChange={handlePetSelectionChange}
                          input={<OutlinedInput label="Предпочтительные виды питомцев" />}
                          renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => (
                                <Chip
                                  key={value}
                                  label={value}
                                  size="small"
                                  sx={{ fontWeight: 500 }}
                                />
                              ))}
                            </Box>
                          )}
                          sx={{ fontWeight: 500 }}
                        >
                          <MenuItem value="cat" sx={{ fontWeight: 500 }}>
                            Кошка
                          </MenuItem>
                          <MenuItem value="dog" sx={{ fontWeight: 500 }}>
                            Собака
                          </MenuItem>
                          <MenuItem value="small" sx={{ fontWeight: 500 }}>
                            Мелкие животные
                          </MenuItem>
                          <MenuItem value="bird" sx={{ fontWeight: 500 }}>
                            Птицы
                          </MenuItem>
                          <MenuItem value="other" sx={{ fontWeight: 500 }}>
                            Другое
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Опыт содержания животных"
                        name="experience"
                        multiline
                        rows={4}
                        required
                        InputProps={{
                          sx: { fontWeight: 500 }
                        }}
                        InputLabelProps={{
                          sx: { fontWeight: 500 }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox name="agreement" required />}
                        label={
                          <Typography sx={{ fontWeight: 500 }}>
                            Согласен с условиями опеки
                          </Typography>
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          py: 1.5,
                          px: 4
                        }}
                      >
                        Отправить заявку
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', py: 4, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" sx={{ color: 'primary.contrastText', fontWeight: 500 }}>
            Разработка пользовательского Web-интерфейса
          </Typography>
          <Typography variant="body2" align="center" sx={{ color: 'primary.contrastText', fontWeight: 500 }}>
            (с) Сергей Синица 2025
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PetFriendsApp;